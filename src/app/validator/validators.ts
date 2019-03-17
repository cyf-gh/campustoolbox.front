import { FormGroup, FormControl } from "_@angular_forms@7.2.9@@angular/forms";

export class PPValidators {
    static passwordEqualValidator( group: FormGroup ) : any {
        let password: FormControl = group.get("password") as FormControl;
        let pconfirm: FormControl = group.get("pconfirm") as FormControl;
        return password === pconfirm;
    }
}
