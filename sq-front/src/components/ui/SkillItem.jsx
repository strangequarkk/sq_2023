import PropTypes from 'prop-types'

const SubItem = ({skill, builtWith}) => {
    const commonClasses ="border border-solid rounded-full py-1 px-2 text-center inline"
    const defaultItem = <li className="grow " >
        <p className={commonClasses + " border-teal-200"}>{skill}</p>
    </li>;
    const specialItem = <li className="grow ">
        <p className={commonClasses +  " border-purple-400"}>{skill}</p>
        <span className="hidden">This site was built with {skill}</span>
    </li>
    const displayedItem = builtWith ? specialItem : defaultItem;
    return (
        <>{displayedItem}</>
        
    )
    
}
SubItem.propTypes = {
    skill: PropTypes.string,
    builtWith: PropTypes.bool
}

export const SkillItem = ({ skill, subItems }) => {
    const subComponents = subItems.length ? subItems.map((item) => {
        return(<SubItem key={item.skill} {...item} />)
    }) : [];
    const subList = subItems.length ? <ul className="flex flex-row flex-wrap justify-around gap-2 px-4">
        {subComponents}
    </ul> : "";
    const styleClasses = subItems.length ? "font-bold mb-2" : "font-bold"
    return (
        <li className="bg-white/60 mb-1 p-2 rounded-lg">
            <h4 className={styleClasses}>{skill}</h4>
            {subList}
        </li>
    )

}

SkillItem.propTypes = {
    skill: PropTypes.string,
    subItems: PropTypes.array
}

SkillItem.defaultProps = {
    subItems: []
}