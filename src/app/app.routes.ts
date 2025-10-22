import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GamesComponent } from './pages/games/games.component';
import { GodsInstructionsComponent } from './pages/gods-instructions/gods-instructions.component';
import { GodsGameComponent } from './pages/gods-game/gods-game.component';
import { MathInstructionsComponent } from './pages/math-instructions/math-instructions.component';
import { MathGameComponent } from './pages/math-game/math-game.component';
import { MoneyInstructionsComponent } from './pages/money-instructions/money-instructions.component';
import { MoneyGameComponent } from './pages/money-game/money-game.component';
import { VideosComponent } from './pages/videos/videos.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdvicesComponent } from './pages/advices/advices.component';
import { DeviceBlockGuard } from './guards/device-block.guard';
import { NotSupportedComponent } from './pages/not-supported/not-supported.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [DeviceBlockGuard] 
    },
    {
        path: 'home',
        component: MenuComponent,
        canActivate: [DeviceBlockGuard] 
    },
    {
        path: 'games',
        component: GamesComponent,
        canActivate: [DeviceBlockGuard] 
    },
    {
        path: 'gods-instructions',
        component: GodsInstructionsComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'gods-game',
        component: GodsGameComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'math-instructions', 
        component: MathInstructionsComponent, 
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'math-game', 
        component: MathGameComponent, 
        canActivate: [DeviceBlockGuard] 
    },
    {
        path: 'money-instructions',
        component:MoneyInstructionsComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'money-game',
        component:MoneyGameComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'videos',
        component: VideosComponent,
        canActivate: [DeviceBlockGuard]     
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'advices',
        component: AdvicesComponent,
        canActivate: [DeviceBlockGuard]
    },
    {
        path: 'not-supported',
        component: NotSupportedComponent,
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];
