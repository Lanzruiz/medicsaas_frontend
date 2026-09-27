import { useMemo, useState } from "react";
import locations from "./locations.json";

export default function LocationSelector() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [suburb, setSuburb] = useState("");
  const states = useMemo(() => Object.keys(locations["United States"] || {}), []);
  const cities = useMemo(() => state ? Object.keys(locations["United States"][state] || {}) : [], [state]);
  const suburbs = useMemo(() => state && city ? locations["United States"][state]?.[city] || [] : [], [state, city]);

  return <div className="row">
     <div className="col-lg-12 mb-2">
        <div className="form-group">
            <label className="form-label">
              Country<span className="required">*</span>
            </label>
            <select class="form-control" disabled>
                <option value="">United State</option>
            </select>
               
        </div>
    </div>
    {/* <label>State<select value={state} onChange={e => {setState(e.target.value); setCity(""); setSuburb("");}}><option value="">Select State</option>{states.map(x => <option key={x}>{x}</option>)}</select></label> */}
    <div className="col-lg-12 mb-2">
        <div className="form-group">
            <label className="form-label">
              State<span className="required">*</span>
            </label>
            <select class="form-control" value={state} onChange={e => {setState(e.target.value); setCity(""); setSuburb("");}}><option value="">Select State</option>{states.map(x => <option key={x}>{x}</option>)}&gt;
            </select>
               
        </div>
    </div>
    <div className="col-lg-12 mb-2">
        <div className="form-group">
            <label className="form-label">
              City<span className="required">*</span>
            </label>
            <select class="form-control" value={city} onChange={e => {setCity(e.target.value); setSuburb("");}}><option value="">Select City</option>{cities.map(x => <option key={x}>{x}</option>)}</select>
               
        </div>
    </div>
    
    <div className="col-lg-12 mb-2">
        <div className="form-group">
            <label className="form-label">
              Suburb / Neighborhood<span className="required">*</span>
            </label>
            <select class="form-control" value={suburb} disabled={!city} onChange={e => setSuburb(e.target.value)}><option value="">Select Suburb</option>{suburbs.map(x => <option key={x}>{x}</option>)}</select>
        </div>
    </div>
     <div className="col-lg-12 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 Street Address<span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianStreetAddress"
                className="form-control"
                placeholder="Enter guardian's street address"
                required
               />
            </div>
          </div> 
    {/* {state && city && suburb && <div className="selected-location"><strong>Selected Location</strong><p>United States → {state} → {city} → {suburb}</p></div>} */}
  </div>;
}
