import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fileContent: string | null = null; // Asegúrate de inicializarlo como null o undefined

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = reader.result as string;
        this.fileContent = text; // Asigna el contenido leído al campo fileContent
      };

      reader.readAsText(file);
    }
  }
}
