import reducer, { loadCards, flip, changeRegion, updateSearchTerm, deleteSearchTerm } from '../redux/cardFlip';

describe('cardFlip', () => {
  it('loads cards face down with their deck index', () => {
    const state = reducer(undefined, loadCards([{ name: 'France' }, { name: 'Peru' }]));
    expect(state.deck).toEqual([
      { name: 'France', isFlipped: false, isSelected: false, mainDeckIndex: 0 },
      { name: 'Peru', isFlipped: false, isSelected: false, mainDeckIndex: 1 },
    ]);
  });

  it('handles a failed flag request with an empty deck', () => {
    const state = reducer(undefined, loadCards(undefined));
    expect(state.deck).toEqual([]);
  });

  it('flips only the named card, and flips it back', () => {
    let state = reducer(undefined, loadCards([{ name: 'France' }, { name: 'Peru' }]));
    state = reducer(state, flip('Peru'));
    expect(state.deck.map((c) => c.isFlipped)).toEqual([false, true]);
    state = reducer(state, flip('Peru'));
    expect(state.deck[1].isFlipped).toBe(false);
  });

  it('tracks the region filter and search term', () => {
    let state = reducer(undefined, changeRegion('Europe'));
    state = reducer(state, updateSearchTerm('fra'));
    expect(state.region).toBe('Europe');
    expect(state.searchTerm).toBe('fra');
    state = reducer(state, deleteSearchTerm());
    expect(state.searchTerm).toBe('');
  });
});
