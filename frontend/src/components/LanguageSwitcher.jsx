import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../features/languageSlice.js';

function LanguageSwitcher({ className }) {
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    return (
        <div className={className}>
            <div className="flex gap-8">
                <Popover className="relative">
                    <PopoverButton className="text-sm/6 font-semibold text-black focus:outline-none data-active:text-blue-600 data-focus:outline data-focus:outline-white data-hover:text-blue-600 cursor-pointer flex items-center gap-2 sm:border sm:border-blue-200 sm:py-2 sm:px-4 rounded-md">
                        {
                            language === 'en' ? <img
                                src="https://flagcdn.com/w40/gb.png"
                                alt="English"
                                className="w-8 h-8 sm:w-5 sm:h-5 rounded-full object-cover border border-blue-300"
                            /> : <img
                                src="https://flagcdn.com/w40/gr.png"
                                alt="Greek"
                                className="w-8 h-8 sm:w-5 sm:h-5 rounded-full object-cover border border-blue-300"
                            />
                        }
                        <span className='hidden sm:block'>{language === 'en' ? 'English' : 'Ελληνικά'}</span>
                    </PopoverButton>
                    <PopoverPanel>
                        {({ close }) => (
                            <div
                                className="w-32 rounded-xl bg-white border border-blue-100 text-sm/6 shadow-[5px_5px_5px_rgba(219,234,254,1),_-5px_-5px_5px_rgba(219,234,254,1)] absolute right-0 translate-x-1/3 sm:left-0 sm:translate-x-0 z-40 mt-2"
                            >
                                <div className="p-3 flex flex-col gap-2">
                                    <button
                                        onClick={() => {
                                            dispatch(changeLanguage('en'));
                                            close();
                                        }}
                                        className="w-full text-left rounded-lg px-3 py-2 transition hover:bg-blue-100 flex items-center gap-2 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/w40/gb.png"
                                            alt="English"
                                            className="w-6 h-6 rounded-full object-cover border border-blue-300"
                                        />
                                        <p className="font-semibold text-black">English</p>
                                    </button>

                                    <button
                                        onClick={() => {
                                            dispatch(changeLanguage('gr'));
                                            close();
                                        }}
                                        className="w-full text-left rounded-lg px-3 py-2 transition hover:bg-blue-100 flex items-center gap-2 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/w40/gr.png"
                                            alt="Greek"
                                            className="w-6 h-6 rounded-full object-cover border border-blue-300"
                                        />
                                        <p className="font-semibold text-black">Greek</p>
                                    </button>
                                </div>
                            </div>
                        )}
                    </PopoverPanel>

                </Popover>
            </div>
        </div>
    );
}

export default LanguageSwitcher;