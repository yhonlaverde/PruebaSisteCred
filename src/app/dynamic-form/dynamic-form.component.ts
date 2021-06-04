import { Component, forwardRef, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR  } from '@angular/forms';
import { Campos } from '../interfaces/campos';
import { KeyValueControl } from './keyvaluecontrol';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
  ],
})
export class DynamicFormComponent implements OnInit ,OnChanges{
  @Input() fields: any[];
  dynamicForm: FormGroup;
  @Input() class: string;
  @Output() dynamicFormValid = new EventEmitter<boolean>();
  controls: KeyValueControl;
  constructor() { 
    console.log(this.fields)
    this.controls = {};
    
  }

  ngOnInit(): void {
    this.dynamicForm.valueChanges.subscribe((res) => {
      this.dynamicFormValid.emit(!this.dynamicForm.valid);
      
    });
  }

  ngOnChanges(): void {
    this.fields.map((element) => {
      const control = new FormControl({
        value: element.id,
        disabled: this.isDisable(element),
      });
      this.controls[element.id] = control;
      return element;
    });
    this.dynamicForm = new FormGroup(this.controls);
    
  }

  isEnable(field: Campos): void {
    const childField = this.fields.find((fieldPattern) => {
      if (field.id === fieldPattern.idPadre) {
        return fieldPattern;
      }
    });
    if (childField) {
      this.controls[childField.id].reset({ value: "", disabled: !field.valor });
    }
  }

  isDisable(field: Campos): boolean {
    if (field.idPadre > 0) {
      const fieldFather = this.fields.find((element) => {
        if (field.idPadre === element.id) {
          return element;
        }
      });
      return !fieldFather.valor;
    }
    return false;
  }


  activeChildrenControl(id: number): void {
    const controlFather = this.dynamicForm.controls[id];
    const fieldChild = this.fields.find((field) => {
      if (field?.idPadre === id) {
        return field;
      }
      return field;
    });
    if (fieldChild && controlFather?.valid) {
      this.dynamicForm.controls[fieldChild.id].enable();
    }
  }
}
