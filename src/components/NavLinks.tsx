import React from 'react';
import { createStyles, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),
  },
}));

const NavLinks = () => {
  const { classes } = useStyles();

  return (
    <>
      <Link to="/" className={classes.link}>
        Calculator
      </Link>
      <Link to="/history" className={classes.link}>
        History
      </Link>
    </>
  );
};

export default NavLinks;
