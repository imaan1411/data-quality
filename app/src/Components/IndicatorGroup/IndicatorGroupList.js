import React from 'react';
import { Query } from "react-apollo";
import IndicatorGroupRepository  from './../../repository/IndicatorGroupRepository';
import DataTable from '../Dashboard/DataTable';
import RouterButton from './../../Components/FormInput/RouterButton';

const IndicatorGroupList = (refetch) => (
  <Query
    query={IndicatorGroupRepository.getListPage(1, 10)}
    fetchPolicy={refetch ? 'cache-and-network': 'cache-first'}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div>
          Indicator Group list
          <div style={{float: 'right'}}>
            <RouterButton targetLocation='/indicator-group/new' disabled={false} label="Add new indicator group"/>
          </div>
          <DataTable data={data.allIndicatorGroups.nodes}/>
        </div>
      );
    }}
  </Query>
);

export default IndicatorGroupList;