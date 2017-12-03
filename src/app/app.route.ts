import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './routing/route1/route1.component';
import { Route2Component } from './routing/route2/route2.component';
import { Route3Component } from './routing/route3/route3.component';
import { Route4Component } from './routing/route4/route4.component';
import { Route5Component } from './routing/route5/route5.component';
import { Route6Component } from './routing/route6/route6.component';
import { Route7Component } from './routing/route7/route7.component';

export const route : Routes = [
{'path':'','redirectTo' : 'Home', 'pathMatch':'full'},
{'path': 'Home','component': Route1Component },
 {'path' : 'SignIn','component' : Route2Component},
{'path' : 'ContactUs','component': Route3Component },
{'path' : 'Feedback','component': Route4Component },
{'path' : 'Product/:id','component' : Route5Component,
 'children' : [
     {'path':'','redirectTo' : 'overview', 'pathMatch':'full'},
	 {'path': 'overview', 'component' : Route6Component},
	 {'path' : 'specs','component': Route7Component},
 ],
}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(route);