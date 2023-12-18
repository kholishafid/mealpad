import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactNode } from 'react';

const PopoverUI = ({ trigger, children }: { trigger: ReactNode, children: ReactNode }) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      {trigger}
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className="rounded p-5 w-[300px] bg-white will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-20 shadow"
        sideOffset={5}
        align='end'
      >
        {children}
        <PopoverPrimitive.Close
          className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] focus:shadow-[0_0_0_2px] outline-none cursor-default bg-transparent hover:bg-pink-1/50 cursor-pointer"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </PopoverPrimitive.Close>
        <PopoverPrimitive.Arrow className="fill-white" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);

export default PopoverUI;
