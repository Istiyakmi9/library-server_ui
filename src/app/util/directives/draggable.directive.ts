// src/app/shared/free-dragging.directive.ts

import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, Inject, OnDestroy, OnInit } from "@angular/core";
import { Subscription, fromEvent, takeUntil } from "rxjs";

@Directive({
    selector: "[draggableNode]",
})
export class DraggingNodeDirective implements OnInit, OnDestroy {
    private element: HTMLElement;

    private subscriptions: Subscription[] = [];

    constructor(
        private elementRef: ElementRef,
        @Inject(DOCUMENT) private document: any
    ) { }

    ngOnInit(): void {
        this.element = this.elementRef.nativeElement as HTMLElement;
        this.initDrag();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s?.unsubscribe());
    }

    initDrag(): void {
        // 1
        const dragStart$ = fromEvent<MouseEvent>(this.element, "mousedown");
        const dragEnd$ = fromEvent<MouseEvent>(this.document, "mouseup");
        const drag$ = fromEvent<MouseEvent>(this.document, "mousemove").pipe(
            takeUntil(dragEnd$)
        );

        // 2
        let initialX: number,
            initialY: number,
            currentX = 0,
            currentY = 0;

        let dragSub: Subscription;

        // 3
        const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
            initialX = event.clientX - currentX;
            initialY = event.clientY - currentY;
            this.element.classList.add('node-dragging');

            // 4
            dragSub = drag$.subscribe((event: MouseEvent) => {
                event.preventDefault();

                currentX = event.clientX - initialX;
                currentY = event.clientY - initialY;

                this.element.style.transform =
                    "translate3d(" + currentX + "px, " + currentY + "px, 0)";
            });
        });

        // 5
        const dragEndSub = dragEnd$.subscribe(() => {
            initialX = currentX;
            initialY = currentY;
            this.element.classList.remove('node-dragging');
            if (dragSub) {
                dragSub.unsubscribe();
            }

            //alert("working in directive inidDrag");
        });

        // 6
        this.subscriptions.push.apply(this.subscriptions, [
            dragStartSub,
            dragSub,
            dragEndSub,
        ]);
    }
}
