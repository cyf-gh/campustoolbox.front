import { FormGroup, FormControl } from '@angular/forms';

export class PPValidators {
    static passwordEqualValidator( group: FormGroup ) : any {
        let password: FormControl = group.get("password") as FormControl;
        let pconfirm: FormControl = group.get("pconfirm") as FormControl;
        return password === pconfirm;
    }
}
