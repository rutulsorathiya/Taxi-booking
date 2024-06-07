import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

  vehicleInformation: FormGroup = new FormGroup({
    image: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    rate: new FormControl(null, [Validators.required]),
  })


  onSubmit() {
    console.log(this.vehicleInformation.value)
  }

  handleFileInput(event: Event) {

    let ev: any = event.target as HTMLInputElement || null;
    const logo = ev.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(logo);
    reader.onload = function () {
      if (typeof reader.result == 'string')
        console.log(reader.result);
    };
    reader.onerror = function (error) {
    };

  }
}