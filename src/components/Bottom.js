import { ArrowUpOutline } from 'react-ionicons'
import { SocialIcon } from 'react-social-icons';

const Bottom = (props) => {

    return(
        <div class="flex justify-center">
        <div class="my-5 w-[60%]">
            <hr class="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700"/>
            <ul class="flex flex-row justify-between w-50%">
                <p class="text-xs text-white mt-3">© Copyright, Joshua Ruthel 2023</p>
                <div onClick={props.topClicked} class="cursor-pointer"><ArrowUpOutline color={'#ffffff'} width="50px" height="50px"/></div>
                <SocialIcon url="https://github.com/JoshRuthel" />
                <SocialIcon url="https://www.linkedin.com/in/joshua-ruthel-48b731225/" />
                <SocialIcon url="https://www.instagram.com/josh.ruthel"/>
            </ul>
        </div>
        </div>
    )

}

export default Bottom