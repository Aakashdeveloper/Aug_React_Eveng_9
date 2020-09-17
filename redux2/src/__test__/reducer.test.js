import reducer from '../reducers';

describe('Reducer Testing',() => {
    it('should return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }))
    })

    it('should return initial state',() => {
        let state={
            article:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual(({
            article:[],
            gallery:[]
        }))
    })
})