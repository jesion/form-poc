import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormModel } from './form.model';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent implements OnInit {

	public myForm: FormGroup;

	public sectionOneVisible: boolean = false;
	public sectionTwoVisible: boolean = false;

	public model: FormModel;

	constructor( private fb: FormBuilder ) {
		this.createForm();
		this.model = new FormModel();
	}

	ngOnInit() {
		setTimeout(() => {
			this.sectionOneVisible = true;
		}, 0);
	}

	public onSubmit(value: any) {
		console.log('Submit handler: ' + JSON.stringify(value));
	}

	public onToggleSectionOne() {
        this.sectionOneVisible = !this.sectionOneVisible;
    }

    public onToggleSectionTwo() {
        this.sectionTwoVisible = !this.sectionTwoVisible;
    }

    public onRequiredChanged($event) {
		this.model.dateRequired = $event as boolean;
		console.log('Model value ' + this.model.dateRequired);
	}

	private createForm() {
		this.myForm = this.fb.group({  });
		this.myForm.valueChanges.subscribe((value: any) => {
			console.log('form changed: ' + JSON.stringify(value));
		});
	}
}
