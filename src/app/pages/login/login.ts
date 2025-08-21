import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  // private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  // auth = inject(AuthStore);

  private redirectUrl =
    this.route.snapshot.queryParamMap.get('redirect') ?? '/products';

  // --- AUTH + FORMS TEMPORARILY DISABLED ---
  // form = this.fb.nonNullable.group({
  //   username: ['', [Validators.required]],
  //   password: ['', [Validators.required]],
  // });

  // Navigate once authenticated; respect ?redirect=...
  // navigateOnAuth = effect(() => {
  //   if (this.auth.isAuthenticated()) {
  //     const target =
  //       this.redirectUrl === '/login' ? '/products' : this.redirectUrl;
  //     this.router.navigateByUrl(target);
  //   }
  // });

  // async submit(): Promise<void> {
  //   if (this.form.invalid || this.auth.status() === 'loading') return;
  //   const { username, password } = this.form.getRawValue();
  //   await this.auth.login(username, password);
  // }

  // placeholder so template compiles without forms:
  submitting = false;
  submitFallback() {
    this.submitting = true;
    setTimeout(() => (this.submitting = false), 800);
  }
}
