import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../contact-us/contact-us.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-ar',
  templateUrl: './home-ar.component.html',
  styleUrls: ['./home-ar.component.scss']
})
export class HomeArComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private conatctService: ContactUsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  initForm() {
    this.contactForm = this.builder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // note: [''],
    });
  }

  isFieldValid(field: string) {
    return (
      !this.contactForm.get(field).valid && this.contactForm.get(field).touched
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.conatctService.sendMails(this.contactForm.value).subscribe(
        (res) => {
          Swal.fire({
            title: 'تم إرسال استفسارك بنجاح',
            text: 'سنتواصل معك بأقرب وقت ممكن',
            icon: 'success',
            confirmButtonText: 'تم',
          }).then(() => {
            this.contactForm.reset();
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

