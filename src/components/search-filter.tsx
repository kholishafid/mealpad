import { useSearchParams } from 'react-router-dom';
import React, { ComponentPropsWithoutRef, ElementRef, useEffect } from 'react';
import classnames from 'classnames';
import * as Select from '@radix-ui/react-select';

const SearchFilter = () => {
  const [_, setSearchParams] = useSearchParams()

  function changeFilter(value: string) {
    if (value === 'name') {
      setSearchParams((prev) => {
        const query = { by: value }
        return new URLSearchParams({
          ...Object.fromEntries(prev.entries()),
          ...query,
        });
      })
      return
    }

    if (value !== 'name') {
      setSearchParams({
        by: value
      })
      return
    }
  }

  useEffect(() => {
    setSearchParams((prev) => {
      const query = { by: 'name' }
      return new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...query,
      });
    })
  }, [])

  return (
    <Select.Root onValueChange={changeFilter} defaultValue='name'>
      <Select.Trigger
        className="bg-red-4 border-l border-stone-2 pl-4 pr-3 flex items-center top-0 bottom-0 w-150px gap-2 justify-between  text-white rounded-r-md text-sm"
        aria-label="Filter"
      >
        <Select.Value placeholder="Search by..." />
        <Select.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] z-20">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white  cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>

          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-slate-7">
                Search By
              </Select.Label>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="area">Area</SelectItem>
              <SelectItem value="category">Category</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white  cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
};

const SelectItem = React.forwardRef<
  ElementRef<typeof Select.Item>,
  ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-sm leading-none  rounded-[3px] flex items-center h-[30px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-red-4 data-[highlighted]:text-white cursor-pointer',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SearchFilter;
