import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SigninForm from '../signin/SigninForm.vue';

describe('SigninForm', () => {
  it('renders properly', () => {
    const wrapper = mount(SigninForm);
    expect(wrapper.exists()).toBe(true);
  });
});
