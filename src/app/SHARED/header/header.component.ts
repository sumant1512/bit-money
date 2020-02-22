import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  ViewChild
} from "@angular/core";
import { ToggleStatusEmit } from "../../TYPES/toggle-status-emit.type";

@Component({
  selector: "app-header",
  host: { class: "w-100" },
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() toggleStatus = new EventEmitter<ToggleStatusEmit>();
  @ViewChild("header", { static: false }) header: ElementRef;
  scrollStatus: boolean = false;
  sideNavStatus: boolean = false;
  toggleDataEmit: ToggleStatusEmit = {
    toggleStatus: false,
    selectedPage: ""
  };
  constructor() {}

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 450) {
      this.scrollStatus = true;
      this.header.nativeElement.classList.add("sticky");
    } else {
      this.scrollStatus = false;
      this.header.nativeElement.classList.remove("sticky");
    }
  }

  // this function is to open and close the navigation in mobile and i-pad view
  navToggle() {
    this.sideNavStatus = this.sideNavStatus ? false : true;
    this.toggleDataEmit.toggleStatus = this.sideNavStatus;
    this.toggleDataEmit.selectedPage = "";
    this.toggleStatus.emit(this.toggleDataEmit);
  }

  // this function is for navigation of pages
  navigation(selectedPage: string) {
    this.sideNavStatus = false; // this close the navigation bar for i-pad and mobile view.
    this.toggleDataEmit.toggleStatus = this.sideNavStatus;
    this.toggleDataEmit.selectedPage = selectedPage;
    this.toggleStatus.emit(this.toggleDataEmit); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
