import React from 'react';

class KanbanUser extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div className="kanban">
        <div className="kanban__col">
          <div className="col-first">
            One
          </div>
        </div>
        <div className="kanban__col col-second">
          <div className="col-second">
            Two
          </div>
        </div>
        <div className="kanban__col col-third">
          <div className="col-three">
            Three
          </div>
        </div>
      </div>
    )
  }
}

export default KanbanUser;