'use client';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HailIcon from '@mui/icons-material/Hail';
import HouseIcon from '@mui/icons-material/House';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import ShopIcon from '@mui/icons-material/Shop';
import SpaIcon from '@mui/icons-material/Spa';
import StorefrontIcon from '@mui/icons-material/Storefront';
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
import SettingsIcon from '@mui/icons-material/Settings';

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
      title: 'Bookings',
      link: '/customer/booking',
      icon: <AddAlarmIcon sx={{ color: 'white' }} />,
    },
    {
      title: 'Pets',
      link: '/customer/pets',
      icon: <PetsIcon sx={{ color: 'white' }} />,
    },
    {
      title: 'Adoptions',
      link: '/customer/adoption',
      icon: <HouseIcon sx={{ color: 'white' }} />,
    },
    {
      title: 'Health',
      link: '/customer/health',
      icon: <LocalHospitalIcon sx={{ color: 'white' }} />,
    },

    {
      title: 'Pet Services',
      link: '/customer/petservice',
      icon: <SpaIcon sx={{ color: 'white' }} />,
    },

    {
      title: 'Purchases',
      link: '/customer/purchase',
      icon: <ShopIcon sx={{ color: 'white' }} />,
    },

    {
      title: 'Settings',
      link: '/customer/purchase',
      icon: <SettingsIcon sx={{ color: 'white' }} />,
    },

    {
      title: 'Orders',
      link: '/customer/purchase',
      icon: <ShopIcon sx={{ color: 'white' }} />,
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
              height: 'auto',
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
              Customer Dashboard
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
