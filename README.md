# Landing Page Project

## Table of Contents

* [Project Info](#project_info)
* [List of files](#list_of_files)
* [Functions](#functions)

## Project_Info

Project builds navigation menu from HTML elements and distinguishes seleceted menu option and active page section upon click or scroll to that item.

## List_Of_Files

css
- styles.css    

js
- app.js

index.html
README.md

## Functions

Build menu
    buildMenu();
    Function creates menu items based on HTML elements with a tag 'section'.

Scroll to section on link click
    scroll();
    Function listens to the event 'scroll' and when one of the sections gets close to the top of the screen, it gets marked as 'active' changing it style and also marking a corresponding menu option as 'active'.

Set sections as active
    setActive();
    Function listens to the event 'click' in the menu sections, then checks which option was clicked and then scrolls to the top of that item. It also marks clicked menu option as 'active'.