// enum ButtonType {
//   Primary = 'primary',
//   PrimaryAligned = 'primary-aligned',
//   Secondary = 'secondary',
//   Ghost = 'ghost',
//   GhostAligned = 'ghost-aligned',
//   Outlined = 'outlined',
//   Next = 'next',
// }

type ButtonSize = 'large' | 'medium' | 'small' | 'tiny' | 'auto';

type ButtonColor = 'primary' | 'secondary' | 'danger' | 'info' | 'custom';

type ButtonType = 'default' | 'outlined' | 'ghost';

type ButtonNativeType = 'submit' | 'button' | 'reset';

export { ButtonColor, ButtonSize, ButtonType, ButtonNativeType };
