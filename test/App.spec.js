/* eslint-env mocha */

import { expect } from 'chai'
import React from 'react'
import Search from '../js/Search'
import ShowCard from '../js/ShowCard'
import { shallow, mount } from 'enzyme'
import { shows } from '../public/data'

describe('<Search />', () => {
  it('should pass', () => {
    const wrapper = shallow(<Search />)
    console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render as many shows as there is data', () => {
    // In order to get the properties of the shallow ShowCard
    const wrapper = shallow(<Search />)

    // Checks the props of the show card against the length of the shows data
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  });

  it('should filter correctly given new state', () => {
    // In order to get the properties of the shallow ShowCard
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    // Checks the props of the show card against the length of the shows data
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  });
})
