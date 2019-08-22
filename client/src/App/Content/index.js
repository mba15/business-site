import React from "react";
import "./treeserenity.jpg";
import Collage from "./Collage";

function Content() {
    return (
        <div className="content">
            <div className="definition">
                <p>  Decisions are in front of us every day, some easy, some minimal. Some hard, some life altering. Sometimes we know exactly where we are headed and other times we sit at the fork unsure hoping someone will make the choice for us or that the right choice will be presented. </p>
                <br />
                <p>The truth is, we know all the time which way to go and what path is the one that works best. </p>
                <br />
                <p>Sometimes Mr. Frost is correct and it is time to tread new ground and learn new things. The path might lead to the same destination  within path, but this way you had the chance to see things others haven't.</p>
                <br />
                <p>My desire in working with you is to walk with you along the road less traveled to see the many wonders you have yet to explore as you learn about yourself.</p>
            </div>
            <div className="collage">
                <Collage />
            </div>
        </div>
    )
}

export default Content;