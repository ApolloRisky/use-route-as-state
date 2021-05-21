import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { useQueryStringKey } from './index';
import { renderHook, act } from "@testing-library/react-hooks";

const wrapper: React.FC = ({ children }) =>
  <MemoryRouter>{children} </MemoryRouter>

describe('useMyHook', () => {

  it('Should add query string key and value', () => {
    const { result, rerender } = renderHook(() => useQueryStringKey('foo', 'bar'), { wrapper });

    expect(result.current[0]).toBe(undefined)

    act(() => {
      rerender();                                             // tried with and without this
    })

    expect(location.pathname).toBe('/home');
  })
})
