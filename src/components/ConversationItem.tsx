import defaultAvatarImg from '../assets/default-avatar.png';
import differenceInDays from 'date-fns/differenceInDays';
import { Conversation } from '@botpress/client';
import { getCountLabel } from '../utils';

interface ConversationItemProps {
	conversation: Conversation;
	userName: string;
	isSelected?: boolean;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
	conversation,
	userName,
	isSelected,
}) => {
	return (
		<div
		  className={`flex items-center px-5 py-4 ${
			isSelected ? 'bg-black-100 text-green-700' : 'text-black'
		  }`}
		>
		  {/* Placeholder rounded profile pic */}
		  <img src={defaultAvatarImg} className="w-10 h-10 rounded-full mr-2" />
		  {/* User name */}
		  <p className="flex flex-col items-start leading-none">
			<span className='text-black'>{userName}</span>
			<span className="text-sm">
			  {getCountLabel(
				differenceInDays(new Date(), new Date(conversation.updatedAt)),
				'day ago',
				'days ago',
				'Today',
				true
			  )}
			</span>
		  </p>
		  {/* Badge with channel name */}
		  <span
			className={`ml-auto px-2 py-1 rounded-full ${
			  conversation.integration === 'whatsapp'
				? 'bg-custom-green text-white'
				: conversation.integration === 'telegram'
				? 'bg-blue-500'
				: 'bg-gray-500'
			} text-white text-xs`}
		  >
			{conversation.integration}
		  </span>
		</div>
	  );
};
