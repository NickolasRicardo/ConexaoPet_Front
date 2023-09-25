import styled from 'styled-components';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getColors } from '@styles/colorsTheme';

//Components CSS
export const Container = styled.div``;
//Components CSS

//Material-UI
export const AntTabs = withStyles({
  root: {
    background: '#F1F1F1',
    paddingLeft: 25,
  },
  indicator: {
    backgroundColor: getColors()?.background,
    height: 10,
  },
})(Tabs);

export const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      minHeight: 0,
      height: 64,
      fontWeight: 'normal',
      fontSize: '1rem',
      marginRight: theme.spacing(0),
      color: '#616161',
      '&:hover': {
        color: '#4D4F5C',
        opacity: 1,
      },
      '&$selected': {
        color: '#4D4F5C',
        fontWeight: 'bold',
        '& .MuiSvgIcon-root': {
          marginRight: 5,
          marginLeft: 0,
          color: '#4D4F5C',
        },
      },
      '&:focus': {
        color: '#4D4F5C',
      },
      '& .MuiTab-wrapper': {
        flexDirection: 'row',
      },
      '& .MuiSvgIcon-root': {
        marginRight: 5,
        marginLeft: 0,
        color: '#616161',
      },
      '& .MuiTab-indicator': {
        height: 4,
      },
    },
    selected: {},
  }),
)(Tab);

export const AntTab2 = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      minHeight: 0,
      fontWeight: 'normal',
      fontSize: '1rem',
      marginRight: theme.spacing(0),
      '&:hover': {
        color: '#4D4F5C',
        opacity: 1,
      },
      '&$selected': {
        color: '#4D4F5C',
        fontWeight: 'bold',
        '& .MuiSvgIcon-root': {
          marginRight: 5,
          marginLeft: 0,
          color: '#4D4F5C',
        },
      },
      '&:focus': {
        color: '#4D4F5C',
      },
      '& .MuiTab-wrapper': {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
      },
      '& .MuiSvgIcon-root': {
        marginLeft: 10,

        color: '#616161',
        justifyContent: 'flex-end',
      },
      '& .MuiTab-labelIcon': {
        minHeight: 48,
      },
      '& .MuiTab-indicator': {
        height: 4,
      },
    },
    selected: {},
  }),
)(Tab);

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  demo1: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
  },
  indicator: {
    height: '5px',
  },
}));
//Material-UI
