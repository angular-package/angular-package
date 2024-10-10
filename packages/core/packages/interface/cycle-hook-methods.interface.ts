export interface CycleHookMethods {
  ngAfterContentInit?: Function;
  ngAfterContentChecked?: Function;
  ngAfterViewInit?: Function;
  ngAfterViewChecked?: Function;
  ngDoCheck?: Function;
  ngOnInit?: Function;
  ngOnDestroy?: Function;
  ngOnChanges?: Function;
}
