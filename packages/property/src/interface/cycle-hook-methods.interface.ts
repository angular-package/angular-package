export interface CycleHookMethods {
  ngAfterContentInit?: () => any;
  ngAfterContentChecked?: () => any;
  ngAfterViewInit?: () => any;
  ngAfterViewChecked?: () => any;
  ngDoCheck?: () => any;
  ngOnInit?: () => any;
  ngOnDestroy?: () => any;
  ngOnChanges?: () => any;
}
