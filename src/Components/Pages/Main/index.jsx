import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import EventCard from "../Event/EventCard";
import {useFetchEventList} from "../../../Hooks/useFetchEventsLists";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
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
  const [rsvp, setRsvp] = useState(1);
  const [data, fetchEvent] = useFetchEventList();
  const events = data?.data.events ?? [];
  const count = data?.data.total_pages ?? 6;
  const handlePaginationChange = (event, value) => {
    setPage(value);
  };
  //// redux state value for search
  const queryText = useSelector(state => state.search.query);
  const eventFromDateData = useSelector(state => state.search.eventFromDate);
  const eventToDateData = useSelector(state => state.search.eventToDate);
  useEffect(() => {
    fetchEvent(page, PER_PAGE, queryText);
  }, [fetchEvent, page, queryText,eventFromDateData,eventToDateData, rsvp]);
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-auto mx-20 my-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col  z-[3]'>
          <div className={classes.root}>
            {events.length > 0 ? (
              <>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {events.map((event) => {
                    return (
                      <EventCard eventDetail={event} setRsvp={setRsvp}/>
                    );
                  })}
                </div>
              </>
            ) : (<>
              <tr>
                <td colSpan={4}>
                  <div className={'text-center h3'}>No Results Found With Search Query '{queryText}'</div>
                </td>
              </tr>
            </>)}
          </div>
        </div>
      </div>
      <TablePagination count={count} page={page}  shape="rounded" onPageChange={handlePaginationChange}/>

    </>
  );
};

export default Main;
