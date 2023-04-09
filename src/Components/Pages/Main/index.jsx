import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import EventCard from "./EventCard";
import {useFetchEventList} from "../../../Hooks/useFetchEventsLists";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {filterText} from "../../../redux/slices/fliterSlice";
import {TablePagination} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const Main = () => {
  const classes = useStyles();
  const PER_PAGE = 6;
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, fetchEvent] = useFetchEventList();
  const events = data?.data.events ?? [];
  const count = data?.data.total_pages ?? 6;
  const handlePaginationChange = (event, value) => {
    setPage(value);
  };
  //// redux state value for search
  const filterby = useSelector((state) => state.eventsFilter.filterText);

  useEffect(() => {
    fetchEvent(page, PER_PAGE, filterby);
  }, [fetchEvent, page, filterby]);
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-auto mx-20 my-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col  z-[3]'>
          <div className={classes.root}>
            <div className=' grid md:grid-cols-3 lg:grid-cols-3 gap-8'>
              {events.map((event) => {
                return (
                  <EventCard eventDetail={event}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <TablePagination count={count} page={page}  shape="rounded" onPageChange={handlePaginationChange}/>

    </>
  );
};

export default Main;
