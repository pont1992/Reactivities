import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityList()
{
    const {activityStore} = useStore();
    const [target, setTarget] = useState('');
    function handleDeleteButton(e:any, id:string)
    {
        setTarget(e.target.name);
        activityStore.deleteActivity(id);
    }; 

    return (
        
        <Segment>
            <Item.Group divided>
                {activityStore.activitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' onClick={() => activityStore.selectActivity(activity.id)}/>
                                <Button 
                                    name={activity.id}
                                    floated='right' 
                                    content='Delete' 
                                    color='red' 
                                    onClick={(e) => handleDeleteButton(e, activity.id)}
                                    loading={activityStore.loading && target === activity.id}/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})
