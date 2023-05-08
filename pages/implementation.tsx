import React from 'react';
import changeTheme from '../utils/changeTheme';
import { Button, ButtonLink, Typography, TypographyTitle } from '../templates';

const implementation = () => {
  const handleThemeMode = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      // document.documentElement.className = currentTheme;
      changeTheme(currentTheme);
      localStorage.setItem(
        'theme',
        currentTheme === 'light' ? 'dark' : 'light'
      );
    }
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-50 py-10 container mx-auto px-20">
      <p className="text-error  bg-error  border-error hover:bg-error"></p>
      <p className="text-warning bg-warning border-warning hover:bg-warning"></p>
      <div className="space-y-5">
        <div className="space-y-2">
          <TypographyTitle level={2}>Title</TypographyTitle>
          <div>
            <TypographyTitle level={5}>
              Typography Title Level 5
            </TypographyTitle>
            <TypographyTitle level={4}>
              Typography Title Level 4
            </TypographyTitle>
            <TypographyTitle level={3}>
              Typography Title Level 3
            </TypographyTitle>
            <TypographyTitle level={2}>
              Typography Title Level 2
            </TypographyTitle>
            <TypographyTitle level={1}>
              Typography Title Level 1
            </TypographyTitle>
          </div>
        </div>
        <div className="space-y-2">
          <TypographyTitle level={2}>Typography</TypographyTitle>
          <div>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              deleniti ipsum, repellat pariatur praesentium unde iste nesciunt
              quasi voluptates explicabo mollitia facilis, doloribus, blanditiis
              obcaecati. Necessitatibus itaque repudiandae tempora.
            </Typography>
          </div>
        </div>
        <div className="space-y-2">
          <TypographyTitle level={2}>Button</TypographyTitle>
          <div className="space-x-2 ">
            <Button>Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </div>
          <div className="space-x-2 ">
            <Button color="warning">Contained</Button>
            <Button color="warning" variant="outlined">
              Outlined
            </Button>
            <Button color="warning" variant="text">
              Text
            </Button>
          </div>
          <div className="space-x-2 ">
            <Button color="error">Contained</Button>
            <Button color="error" variant="outlined">
              Outlined
            </Button>
            <Button color="error" variant="text">
              Text
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <TypographyTitle level={2}>Button Link</TypographyTitle>
          <div className="space-x-2 ">
            <ButtonLink>Contained</ButtonLink>
            <ButtonLink variant="outlined">Outlined</ButtonLink>
            <ButtonLink variant="text">Text</ButtonLink>
          </div>
          <div className="space-x-2 ">
            <ButtonLink color="warning">Contained</ButtonLink>
            <ButtonLink color="warning" variant="outlined">
              Outlined
            </ButtonLink>
            <ButtonLink color="warning" variant="text">
              Text
            </ButtonLink>
          </div>
          <div className="space-x-2 ">
            <ButtonLink color="error">Contained</ButtonLink>
            <ButtonLink color="error" variant="outlined">
              Outlined
            </ButtonLink>
            <ButtonLink color="error" variant="text">
              Text
            </ButtonLink>
          </div>
        </div>
        <TypographyTitle level={2}>Button Link open new tab</TypographyTitle>
        <div className="space-x-2 ">
          <ButtonLink openNewTab>Contained</ButtonLink>
          <ButtonLink openNewTab variant="outlined">
            Outlined
          </ButtonLink>
          <ButtonLink openNewTab variant="text">
            Text
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default implementation;
