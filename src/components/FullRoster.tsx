import {Link} from "react-router-dom";
import PlayerAPI from "../playerAPI";
import React = require("react");

const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map((p: any) => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default FullRoster;