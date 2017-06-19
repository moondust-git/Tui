import {Injectable} from '@angular/core';

/**
 * Configuration service for the TPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
@Injectable()
export class TPopoverConfig {
  placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  triggers = 'hover';
  container: string;
  type: 'tooltip' | 'popover' = 'popover';
}
