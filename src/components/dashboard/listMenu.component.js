import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SyncAlt from "@mui/icons-material/SyncAlt";
import MenuBook from "@mui/icons-material/MenuBook";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BadgeIcon from '@mui/icons-material/Badge';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton href="">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton href="">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Mes commandes" />
        </ListItemButton>
        <ListItemButton href="">
            <ListItemIcon>
                <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Mes infos" />
        </ListItemButton>
        <ListItemButton href="">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Ma cagnotte" />
        </ListItemButton>
        <ListItemButton href="/dashboard/menu">
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItemButton>
    </React.Fragment>
);

export const adminListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Mes informations" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Les commandes" />
        </ListItemButton>
        <ListItemButton href="/dashboard/admin/order">
            <ListItemIcon>
                <MenuBook />
            </ListItemIcon>
            <ListItemText primary="Les menus" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Les plats" />
        </ListItemButton>
        <ListItemButton href="/dashboard/admin">
            <ListItemIcon>
                <SyncAlt />
            </ListItemIcon>
            <ListItemText primary="Créditer/Débiter" />
        </ListItemButton>
    </React.Fragment>
);