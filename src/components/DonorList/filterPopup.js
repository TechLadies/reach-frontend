import React, { useState, useEffect } from "react";
import Header from "../Header";
import Modal from "../Modal";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";

const fetchSourceList = async () => {
  const res = await fetch(`${process.env.REACT_APP_API}/sources`);
  const data = res.json();
  return data;
};
const fromDateRef = React.createRef();
const toDateRef = React.createRef();
const typeaheadRef = React.createRef();

function FilterPopUp(props) {
  const [sources, setSources] = useState([]);
  // const activeFilter = true;
  const {filter, setFilter} = props
  const [localFilter, setLocalFilter] = useState({...filter})
  const [selectTypeAhead, setSelectedTypeAhead] = useState(filter.source || []);
  const [startDate, setStartDate] = useState(filter.from ? new Date(filter.from) : '');
  const [endDate, setEndDate] = useState(filter.to ? new Date(filter.to): '');


  const clearState = () => {
    fromDateRef.current.clear();
    toDateRef.current.clear();
    typeaheadRef.current.clear();
    setSelectedTypeAhead([])
    setLocalFilter({})
  };

  useEffect(() => {
    fetchSourceList().then((data) => setSources(data));
  }, []);

  useEffect(() => {
    setLocalFilter({ ...filter });
    setStartDate(filter.from ? new Date(filter.from) : '');
    setEndDate(filter.to ? new Date(filter.to) : '');
    setSelectedTypeAhead(filter.source);
  }, [props.show, filter]);

  const confirmFilters = () => {
    setFilter(localFilter)
    props.close();
  };


  return (
    
    <Modal show={props.show} onHide={props.close} dialogClassName="modal-90w">
      <form onSubmit={confirmFilters}>
        <div className="donorlist-modal">
          <Modal.Header>
        
            <div>
              <h3 className="donorfilters-head">Donor Filters</h3>
              <span className="donorfilters-subhead">
                Donor has made at least 1 donation that satisfies the following
                criteria
              </span>
            </div>
            <Modal.Close onClick={props.close} />
          </Modal.Header>
          <Modal.Body>
            <div className="modalbody">
              <div className="modalfilter">
                <b className="filterlabel">Date Range</b>
                <div className="filterdatepicker d-flex">
                  <div>
                    <label className="datelabel-from" htmlFor="startDate">
                      {" "}
                      From &nbsp; {"      "}
                    </label>
                    <DatePicker
                      className="dateform"
                      selected={startDate}
                      name="from"
                      onChange={(date) => {
                        setStartDate(date);
                        setLocalFilter({ ...localFilter, from: date ? date.toISOString() : false });
                        
                       
                      }}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd/MM/yyyy"
                      ref={fromDateRef}
                    />
                  </div>
                  <div>
                    <label className="datelabel-to" htmlFor="endDate">
                      {" "}
                      To &nbsp; {"      "}
                    </label>
                    <DatePicker
                      className="dateform"
                      selected={endDate}
                      name="to"
                      onChange={(date) => {
                        setEndDate(date);
                        setLocalFilter({ ...localFilter, to: date ? date.toISOString() : false });
                      }}
                      selectsEnd
                      endDate={endDate}
                      minDate={startDate}
                      dateFormat="dd/MM/yyyy"
                      ref={toDateRef}
                    />
                  </div>
                </div>
              </div>

              <div className="modalfilter">
                <strong className="filterlabel">Tax Deductable Status</strong>

                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="defaultInline1"
                    name="taxDeduc"
                    defaultChecked={!localFilter.taxDeduc}
                    onChange={() => setLocalFilter({ ...localFilter, taxDeduc: false })} // if taxDeduc is a boolean false, it will be omitted from the query.
                  />
                  <label className="custom-control-label" htmlFor="defaultInline1">
                    Any
                  </label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="defaultInline2"
                    name="taxDeduc"
                    defaultChecked={localFilter.taxDeduc === "true"}
                    onChange={() => setLocalFilter({ ...localFilter, taxDeduc: "true" })}
                    value="true"
                  />
                  <label className="custom-control-label" htmlFor="defaultInline2">
                    Tax Deductible
                  </label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="defaultInline3"
                    name="taxDeduc"
                    defaultChecked={localFilter.taxDeduc === "false"}
                    onChange={() => setLocalFilter({ ...localFilter, taxDeduc: "false" })}
                    value="false"
                  />
                  <label className="custom-control-label" htmlFor="defaultInline3">
                    Non Tax Deductible
                  </label>
                </div>
              </div>

              <div className="modalfilter">
                <b className="filterlabel">
                  Source contains any of these phrase(s)
                </b>
                <span className="donorfilter-subhead">
                  Type in each source and press "Enter"
                </span>
                <Typeahead
                  id="sources-list"
                  labelKey="description"
                  multiple={true}
                  options={sources}
                  name="source"
                  onChange={(selected) => {
                    setSelectedTypeAhead(selected);
                    setLocalFilter({
                      ...localFilter,
                      source: selected.map((e) => {
                        return e.description;
                      }),
                    });
                  }}
                  placeholder="e.g. Charity Dinner, Reach website"
                  selected={selectTypeAhead}
                  className="sources"
                  ref={typeaheadRef}
                />
              </div>

              <div className="modalfilter">
                <b className="filterlabel d-flex">Total Donated Amount</b>
                <div
                  className="form-inline my-2 my-lg-0"
                  id="donationAmtSearchForm "
                >
                  <input
                    className="form-control mr-sm-1 form-amt "
                    name="minAmt"
                    type="number"
                    step="0.01"
                    placeholder="$.0.00"
                    aria-label="Search"
                    onChange={(e) => {
                      setLocalFilter({ ...localFilter, [e.target.name]: e.target.value });
                    }}
                    value={localFilter.minAmt || ""}
                  />
                  to&nbsp; {"      "}
                  <input
                    className="form-control mr-sm-2 form-amt"
                    name="maxAmt"
                    type="number"
                    step="0.01"
                    placeholder="$0.00"
                    aria-label="Search"
                    onChange={(e) =>
                      setLocalFilter({ ...localFilter, [e.target.name]: e.target.value })
                    }
                    value={localFilter.maxAmt || ""}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
        <Modal.Footer>
          <Header.Buttons>
            <div style={{ display: "flex" }}>
              <button
                style={{ marginLeft: "auto" }}
                onClick={clearState} /* this clears all 3 filters */
                className="button transparentbutton"
                type="reset"
              >
                Reset Filters
              </button>
              <button
                onClick={confirmFilters}
                className={"button orangebutton "}
                type="button"
              >
                Apply Filters
              </button>
            </div>
          </Header.Buttons>
        </Modal.Footer>
      </form>
    </Modal>
  );
   
}

export default FilterPopUp;
