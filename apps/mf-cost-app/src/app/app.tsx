import { initI18n, changeLanguage } from '@cudo/mf-core';
import { CostList } from '@cudo/shared-components';
import React, { Suspense } from 'react';
import { Button } from 'semantic-ui-react';
import AddNewItem from './add-new-item/add-new-item';
import { DELETE_COST, GET_COST } from './graphql/graphql';
import { useCostQuery } from './services/useRequest';
import { LoaderPage } from "@cudo/shared-components"
import CostDelete from './delete-cost';
import { useMutation } from '@apollo/client';
import { ICosts } from './interfaces/cost';

const defaultLanguage = 'de-DE';
const supportedLanguages = [defaultLanguage, 'en-GB'];
initI18n('/assets/i18n/{{lng}}.json', defaultLanguage);

export function App() {
  const [openCost, setOpenCost] = React.useState(false)
  const [openCostDelete, setOpenCostDelete] = React.useState(false)
  const [costId, setCostId] = React.useState('')
  const [costDelete, { data: deleteCostData }] = useMutation(DELETE_COST,
    {
      refetchQueries: [
        { query: GET_COST }
      ]
    }
  )

  const { loading, error, data } = useCostQuery(GET_COST);
  if (loading) {
    return <LoaderPage />
  }
  if (data) {
    console.log('====================================');
    console.log('data-cost', data.costs);
    console.log('====================================');
  }
  const addNew = () => {
    console.log('add new')
    setOpenCost(true);
  }

  const cancel = () => {
    setOpenCost(false)
  }

  const deleteCost = (data) => {
    setOpenCostDelete(true)
    setCostId(data)
  }
  const closeDelete = (data) => {
    setOpenCostDelete(false)
  }
  const confirmDeleteCost = (data) => {
    console.log('data', data)
    costDelete({
      variables: {
        costID: data
      },
      update: (
        cache,
        data
      ) => {
        const cacheData = cache.readQuery({ query: GET_COST }) as ICosts;
        cache.writeQuery({
          query: GET_COST,
          data: {
            cost: [...cacheData.costs, data['createCost']]
          }
        });
      }
    });
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div>
          <AddNewItem openCost={openCost} cancel={cancel}></AddNewItem>
        </div>
        {openCostDelete && <CostDelete costId={costId} openAlertF={openCostDelete} cancel={closeDelete} confirm={confirmDeleteCost} />}
        <CostList addNew={addNew} costs={data.costs} delete={deleteCost}></CostList>
        {/* <Button onClick={() => changeLanguage('en-GB')}>EN</Button>
        <Button onClick={() => changeLanguage('de-DE')}>DE</Button> */}
      </div>
    </Suspense>
  );
}

export default App;
