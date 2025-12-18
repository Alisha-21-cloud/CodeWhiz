"use client";

import { ProfileForm } from '@/module/settings/components/profile-form';
import { RepositoryList } from '@/module/settings/components/repository-list';
import React from 'react'

const SettingPage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Settings</h1>
        <p>Manage your account settings and connected repositories.</p>
      </div>
      <ProfileForm />
      <RepositoryList />
    </div>
  )
}

export default SettingPage