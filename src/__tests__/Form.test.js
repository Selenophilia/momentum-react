import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Form from   '../components/Forms/Form'


let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})
 

it(" render todo list form input", () => {
    const onSubmit = jest.fn(e => e.preventDefault());

    act(() => {
        render(<Form  onFormSubmit={onSubmit}/>, container)
    });

    const form = document.querySelector('form')
    const input = document.querySelector('input[type=text]')

    act(() => {
        form.submit();
    })

    expect(onSubmit).toHaveBeenCalledTimes(0)

    act(() => {
        input.value = 'test-todos'
        form.submit()
    })
    
    expect(onSubmit).toHaveBeenCalledTimes(1)

});