import PropTypes from 'prop-types'

const SubItem = ({skill, builtWith}) => {
   
    const defaultItem = <li className="self-start grow">{skill}</li>;
    const specialItem = <li className="highlighted self-start grow">
        {skill}
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
    const subList = subItems.length ? <ul className="flex flex-row justify-around pl-4">
        {subComponents}
    </ul> : "";
    return (
        <li>
            <h4 className="font-bold">{skill}</h4>
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