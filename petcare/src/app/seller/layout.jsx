'use client';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Link from 'next/link';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(true);

  const links = [
    {
      title: 'Report',
      link: '/seller/report',
      icon: <AssessmentIcon sx={{ color: 'white' }} />,
    },
    {
      title: 'Products',
      link: '/seller/product',
      icon: <Inventory2Icon sx={{ color: 'white' }} />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }} className='bg-[#1c1b1f]'>
      <Box sx={{ display: 'flex', columnGap: 6 }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              mt: 10.9,
              height: `calc(100vh - 10.9 )px`,
              backgroundColor: '#1c1b1f',
              borderRight: '2px solid white',
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <Typography
              sx={{
                marginX: 'auto',
                fontFamily: 'Poppins',
                fontSize: 20,
                color: '#ECDFCC',
              }}
            >
              Seller Dashboard
            </Typography>
          </DrawerHeader>
          <Divider />
          <List>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className='no-underline !font-[Poppins] text-[#ECDFCC] hover:text-[#ECDFCC] hover:no-underline'
              >
                <ListItem disablePadding className='hover:bg-[#1989ce]'>
                  <ListItemButton>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText
                      primary={link.title}
                      sx={{ fontFamily: 'Poppins !important' }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Main
          open={open}
          className='bg-[#1c1b1f] mt-20'
          // style={{ width: `calc(100% - ${drawerWidth}px)` }}
          style={{ width: '100%' }}
        >
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </Box>
  );
}
