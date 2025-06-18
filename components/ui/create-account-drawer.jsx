"use client";

import React, { useState } from 'react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Button,
  DrawerClose
} from '@/components/ui/drawer'

const CreateAccountDrawer = ({children}) => {
    const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
     <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
  )
}

export default CreateAccountDrawer;
