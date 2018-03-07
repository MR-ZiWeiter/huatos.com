import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        'z-index': 999
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        'z-index': 999
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        'z-index': 999
      }))
    ])
  ]);


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/