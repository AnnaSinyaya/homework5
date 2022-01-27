import { shallowMount } from '@vue/test-utils'
import component from './book-catalog'

describe('test book-catalog', () => {
    it('works', () => {
        const wrapper = shallowMount(component);
        expect(wrapper).toBeDefined();
        expect(wrapper.html()).toBeDefined();
        expect(wrapper.html()).toContain('Добавить');
    })
})