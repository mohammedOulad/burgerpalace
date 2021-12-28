import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    artistInfo,
} from "./burger.module.css"

export const Burger = ({ burger, slug }) => {
    const profile = getImage(burger.burgerFields.burgerPicture.localFile)
    return (
        <Link
            className={wrapper}
            to={slug}>
            <GatsbyImage
                className={image}
                image={profile}
                alt={burger.burgerFields.burgerPicture.altText}
            />
            <div className="">
            <div className={artistInfo}>
                {burger.burgerFields.name && <p>{burger.burgerFields.name}</p>}
            </div>
            </div>
            
        </Link>
    )
}

export default Burger;