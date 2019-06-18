import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from "nativescript-angular/testing";
import { ItemsComponent } from "~/item/items.component";
import { AppModule } from "~/app.module";
import { View } from "tns-core-modules/ui/content-view";
import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";

// A sample Mocha test
describe('Items component', function () {

	beforeEach(nsTestBedBeforeEach(
		[
			// ItemsComponent
		],
		[],
		[
			AppModule
		]
	));

	afterEach(nsTestBedAfterEach(false));

	describe('component Rendering', () => {
		it('should crate component instance', async () => {
			const fixture = await nsTestBedRender(ItemsComponent);
			const component = fixture.componentInstance;
			assert.exists(component);
		});

		it('should initialize counter in 0', async () => {
			const fixture = await nsTestBedRender(ItemsComponent);
			const component = fixture.componentInstance;
			assert.equal(component.count, 0);
		})

		it('should update value count on user interaction', async () => {
			const fixture = await nsTestBedRender(ItemsComponent);
			const component = fixture.componentInstance;
			const debugElement = fixture.debugElement;
			const native: View = debugElement.nativeElement;
			fixture.detectChanges();
			assert.instanceOf(native, View);
			const label: Label = native.getViewById("count-label");
			const button: Button = native.getViewById("button");
			assert.isDefined(label);
			assert.equal(label.text, `Test ${0}`);
			button.notify({
				eventName: "tap",
				object: button
			})
			fixture.detectChanges();
			assert.equal(label.text, `Test ${1}`);
			button.notify({
				eventName: "tap",
				object: button
			})
			fixture.detectChanges();
			assert.equal(label.text, `Test ${2}`);
		})
	});
});
